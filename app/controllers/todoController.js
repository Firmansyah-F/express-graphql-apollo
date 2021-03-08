
class todoClass {

    static getAlltodos (req, res) {
            
        const todos = {
                success: true,
                message: "data berhasil didapatkan",
                data: [
                    
                        {
                            id: 1,
                            title: "contoh",
                            description: "contoh"

                        },
                        {
                            id: 2,
                            title: "test",
                            description: "testing"
                        }
                
                      ]
            }
        res.json(todos)

        }
    }

module.exports = todoClass

