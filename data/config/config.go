package config

import (
	"encoding/json"
	"io/ioutil"
)

//Config - Config object
//	The seeet url rules : https://spreadsheets.google.com/feeds/cells/{KEY}/{{SHEET_INDEX}}/public/values?alt=json
//		- KEY : the key of the sheet
//		- SHEET_INDEX : index of the sheet
type Config struct {
	URL     string
	ColKeys []string
}

//PATH - Path of the config
const PATH = "./config/config.json"

//GetConfig - To get config object
func GetConfig() Config {

	data, err := ioutil.ReadFile(PATH)
	if err != nil {
		panic(err)
	}
	u := Config{}
	err = json.Unmarshal(data, &u)
	if err != nil {
		panic(err)
	}
	return u
}
