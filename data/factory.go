package main

import (
	config "classIn/data/config"
	"fmt"
)

func main() {
	conf := config.GetConfig()
	fmt.Printf("Results: %v\n", conf)

}
