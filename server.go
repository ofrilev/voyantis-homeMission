package main

import (
	"net/http"

	"github.com/gorilla/mux"
)

var queues = map[string][]string{}

func main() {
	r := mux.NewRouter()
	r.HandleFunc("/api/{queue_name}", PostQueue).Methods("POST")
	r.HandleFunc("/api/{queue_name}", GetQueue).Methods("GET")
	http.ListenAndServe(":8080", r)
}
