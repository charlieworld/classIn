package main

import (
	config "classIn/data/config"
	"fmt"
)

func main() {
	conf := config.Get()
	fmt.Print(conf)
}
