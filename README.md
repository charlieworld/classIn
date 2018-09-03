# classIn

專屬輔大人的修課經驗交流平台

## 填寫你的修課經驗

表單連結：[classin.info](https://classin.info)

## 看看大家的選課資料

### 網站

網站連結： [classin.info](https://classin.info)

### 開放資料

每天會從Google Spreadsheets製作成JSON格式的開放資料

classIn的網站就是使用這份資料

資料連結：[data.json](https://classin.info/data/data.json)

### 原始 Google Spreadsheet資料

你也可以直接看[原始表單回應資料](https://docs.google.com/spreadsheets/d/1aKaEzOVSxhggU_ydTTvlxGID_rkBPIbS9_WZrQVREpo)

---

以上是ClassIn，如果你想要拿classIn的架構改成自己的應用的話，請參閱下面的說明

## 架構

待捕....

## 環境安裝

製作 data.json 使用 go (為何使用golang ? 沒有為什麼，就剛好藉這個機會練習XD")

解析json有用到`go-simplejson`

``` bash
go get -u github.com/bitly/go-simplejson
```

### 使用 factory.go (製作data.json)

切換到 data 目錄下執行

``` bash
go run factory.go
```

或是自行編譯成可執行檔

``` bash
go build -o factory factory.go
```
