import { Config } from '@jest/types'
import { defaults } from 'jest-config'

export default async function (): Promise<Config.InitialOptions> {
	return {
		verbose: true,
		moduleFileExtensions: [...defaults.moduleFileExtensions, 'ts'],
		preset: 'ts-jest',
		testEnvironment: 'node',
    testMatch: [
      '<rootDir>/**/*.test.ts'
    ]
	}
}