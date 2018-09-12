package main

import (
	config "classIn/data/config"
	"encoding/json"
	"fmt"
	"io/ioutil"
	"net/http"
	"strconv"

	"github.com/bitly/go-simplejson"
)

//dataPack - the output object
type dataPack struct {
	Header interface{}
	Data   []interface{}
}

func main() {
	// read conf
	conf := config.GetConfig()
	fmt.Printf("[FACTORY] (1/4) GET Target data URL: %v\n", conf.URL)

	// get data from google sheet
	resp, err := http.Get(conf.URL)
	if err != nil {
		panic(err)
	}
	defer resp.Body.Close()
	body, err := ioutil.ReadAll(resp.Body)
	if err != nil {
		panic(err)
	}
	fmt.Printf("[FACTORY] (2/4) GET Target data DONE !\n")

	// decode json
	js, err := simplejson.NewJson(body)
	if err != nil {
		panic("[ERROR] json format error")
	}
	entry, err := js.Get("feed").Get("entry").Array()

	// reformat data
	output := reFormatData(conf.ColKeys, entry)
	fmt.Printf("[FACTORY] (3/4) Reformat data done! total data : %v \n", len(output.Data))

	// encode json and write file
	outputJSON, _ := json.Marshal(output)
	err = ioutil.WriteFile("data.json", outputJSON, 0644)
	if err != nil {
		panic(err)
	}
	fmt.Printf("[FACTORY] (4/4) Save data DONE !\n")
}

//reFormatData - Reformating data
func reFormatData(keys []string, data []interface{}) dataPack {
	var output dataPack
	o := make(map[string]interface{})
	for i := 0; i < len(keys); i++ {
		t := data[0]
		data = data[1:]
		head, _ := t.(map[string]interface{})
		head, _ = head["gs$cell"].(map[string]interface{})
		keyName := keys[i]
		o[keyName] = head["$t"]
	}
	output.Header = o

	temp := make(map[string]interface{})
	n, _ := data[0].(map[string]interface{})
	n, _ = n["gs$cell"].(map[string]interface{})
	//rowNm, _ := n["row"]

	indexCount := 1
	colCount := 0
	for _, item := range data {

		d, _ := item.(map[string]interface{})
		d, _ = d["gs$cell"].(map[string]interface{})

		s := d["col"].(string)
		i, _ := strconv.Atoi(s)
		keyName := keys[i-1]
		temp[keyName] = d["$t"]
		temp["index"] = indexCount
		colCount++

		if colCount == len(keys) {
			output.Data = append(output.Data, temp)
			temp = make(map[string]interface{})
			//rowNm = d["row"]
			indexCount++
			colCount = 0
		}
	}
	return output
}
