package main

import (
	"encoding/json"
	"fmt"
	"net/http"
	"strconv"
	"time"

	"github.com/gorilla/mux"
)

type PostBody struct {
	Message string `json:"message"`
}

func PostQueue(w http.ResponseWriter, r *http.Request) {
	fmt.Println("Recived Post request")
	var req PostBody
	vars := mux.Vars(r)
	queueName := vars["queue_name"]
	if queueName == "" {
		http.Error(w, "Queue name is required", http.StatusBadRequest)
	}
	if err := r.ParseForm(); err != nil {
		http.Error(w, "Failed to parse form", http.StatusInternalServerError)
		return
	}
	err := json.NewDecoder(r.Body).Decode(&req)
	if err != nil {
		http.Error(w, "Error decoding request body", http.StatusBadRequest)
		return
	}
	if req.Message == "" {
		http.Error(w, "Message is required", http.StatusBadRequest)
		return
	}
	val, ex := queues[queueName]
	if ex {
		queues[queueName] = append(val, req.Message)
	} else {
		queues[queueName] = []string{req.Message}
	}
	w.WriteHeader(http.StatusOK)
}

func GetQueue(w http.ResponseWriter, r *http.Request) {
	fmt.Println("Recived Get request")
	var timeOut = 10
	start := time.Now()
	var err error
	vars := mux.Vars(r)
	queueName := vars["queue_name"]
	if queueName == "" {
		http.Error(w, "Queue name is required", http.StatusBadRequest)
		return
	}
	var timeOutStr = vars["timeout"]
	if timeOutStr != "" {
		timeOut, err = strconv.Atoi(timeOutStr)
		if err != nil {
			http.Error(w, "time out most be an integer", http.StatusBadRequest)
			return
		}
	}
	val, ex := queues[queueName]
	if !ex {
		for {
			var tNow = time.Now()
			if tNow.After(start.Add(time.Duration(timeOut) * time.Second)) {
				http.Error(w, "Queue not found", http.StatusNotFound)
				return
			}
		}
	}
	if len(val) == 0 {
		w.WriteHeader(http.StatusNoContent)
		return
	}
	msg := val[0]
	queues[queueName] = val[1:]
	w.WriteHeader(http.StatusOK)
	w.Header().Set("Content-Type", "application/json")
	json.NewEncoder(w).Encode(msg)
}
