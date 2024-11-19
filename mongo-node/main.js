const { default: mongoose } = require("mongoose")
const {connectToDb, StudentCollection} = require("./db")
const express = require("express")

const app = express()
connectToDb()


