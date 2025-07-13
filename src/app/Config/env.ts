import dotenv from "dotenv";

dotenv.config()

interface EnvConfig {
    PORT: string,
    DB_URL: string,
    NODE_ENV: "development" | "production",
    JWT_SECRET : string,
    Jwt_ACCESS_EXPIRES : string, 
    BCRYPT_SALT : string,
    SUPER_ADMIN_EMAIL : string ,
    SUPER_ADMIN_PASS : string

}

const loadEnvVariables = (): EnvConfig => {
    const requiredEnvVariables: string[] = ["PORT", "DB_URL", "NODE_ENV" , "JWT_SECRET" , "Jwt_ACCESS_EXPIRES" , "BCRYPT_SALT" , "SUPER_ADMIN_EMAIL", "SUPER_ADMIN_PASS"];

    requiredEnvVariables.forEach(key => {
        if (!process.env[key]) {
            throw new Error(`Missing require environment variabl ${key}`)
        }
    })

    return {
        PORT: process.env.PORT as string,
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        DB_URL: process.env.DB_URL!,
        NODE_ENV: process.env.NODE_ENV as "development" | "production",
        JWT_SECRET : process.env.JWT_SECRET as string,
        Jwt_ACCESS_EXPIRES : process.env.Jwt_ACCESS_EXPIRES as string, 
        BCRYPT_SALT : process.env.BCRYPT_SALT as string,
        SUPER_ADMIN_EMAIL : process.env.SUPER_ADMIN_EMAIL as string,
        SUPER_ADMIN_PASS : process.env.SUPER_ADMIN_PASS as string
    }
}

export const envVars = loadEnvVariables()