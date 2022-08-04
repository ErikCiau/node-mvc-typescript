import cors from 'cors'
import express from 'express'
import helmet from 'helmet'
import morgan from 'morgan'
import { ServerApplication } from './app'
import { router } from './routes'

const server = new ServerApplication({
	app: express(),
	port: 3000,
	router,
})

server.setup((app) => {
	app.use(helmet())
	app.use(cors())
	app.use(morgan('dev'))
	
})

server.listen(() => {
	console.log(`Server running on port 3000 🚀`)
})
