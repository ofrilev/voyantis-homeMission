package main

import (
	"fmt"
	"net/http"

	"github.com/gorilla/mux"
)

var queues = map[string][]string{}

func corsMiddleware(next http.Handler) http.Handler {
	return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) { // Allow any origin
		w.Header().Set("Access-Control-Allow-Origin", "http://localhost:5173")
		w.Header().Set("Access-Control-Allow-Methods", "POST, GET, OPTIONS, PUT, DELETE")
		w.Header().Set("Access-Control-Allow-Headers", "Content-Type, Authorization")
		w.Header().Set("Access-Control-Allow-Credentials", "true")
		if r.Method == "OPTIONS" {
			w.WriteHeader(http.StatusOK)
			return
		}
		next.ServeHTTP(w, r)
	})
}
func main() {
	r := mux.NewRouter()
	r.HandleFunc("/api/{queue_name}", PostQueue).Methods("POST")
	r.HandleFunc("/api/{queue_name}", GetQueue).Methods("GET")
	corsM := corsMiddleware(r)
	fmt.Println("Server is running on port 8080...")
	http.ListenAndServe(":8080", corsM)
}
