"use strict"

const request = require("request"),
cheerio = require("cheerio"),
notifier = require("node-notifier")

const googleSearchItem = async item => {
    request(`https://www.google.com.br/search?q=${item}`, (err, res, body) => {
        err && console.error(err)
        const $ = cheerio.load(body)
        $("h3").each(function() {
            notifier.notify($(this).text())
        })
    })
}

googleSearchItem("Voltando ao normal")