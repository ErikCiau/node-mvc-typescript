import { Application, Router } from 'express'
import { db } from './database'

type ServerApplicationProps = {
	app: Application
	port: number
	router?: Router
}

export class ServerApplication {
	private app: Application
	private port: number
	private router?: Router

	constructor({ app, port, router }: ServerApplicationProps) {
		this.app = app
		this.port = port
		this.router = router
	}

	public setup(fn: (app: Application) => void): void {
		fn(this.app)
		if (this.router) {
			this.app.use('/api', this.router)
		}
	}

	public listen(cb: () => void): void {
		db.authenticate()
			.then(() => {
				this.app.listen(this.port, cb)
			})
			.catch((e) => {
				throw e
			})
	}
}
