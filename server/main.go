package main

import (
	"github.com/gin-gonic/contrib/static"
	"github.com/gin-gonic/gin"
)

func main() {
	// Set the router as the default one shipped with Gin
	router := gin.Default()

	routes := [5]string{"/", "/course", "/courses", "/about"}

	// Serve frontend static files
	for _, element := range routes {
		router.Use(static.Serve(element, static.LocalFile("./server/static", true)))
	}

	// Start and run the server
	router.Run(":3000")
}
