const { language } = require("../db/models");

class languageController {

    static async getAll(req, res) {
        try {
            const languages = await language.findAll();
            console.log(languages);
            const payload = {
                succes: true,
                message: "success get all languages",
                data: languages,
            };
            return res.json(payload);
        } catch (error) {
            const payloadError = {
                success: false,
                message: error.message,
                data: error,
            };
            return res.status(500).json(payloadError);
        }
    }
}

module.exports = languageController;

