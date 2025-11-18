import type { Config } from 'jest';

const config: Config = {
    testEnvironment: "node",
    clearMocks: true,
    collectCoverage: true,
    coverageDirectory: "coverage",
    coverageProvider: "v8",
    roots: [
        "<rootDir>/src",
        "<rootDir>/tests",
    ],
    transform: {},
    extensionsToTreatAsEsm: ['.ts']
};

export default config;
