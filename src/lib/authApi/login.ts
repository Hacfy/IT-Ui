

export async function login(email: string, password: string) {

    try {
        const response = await fetch("/api/auth/login", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ email, password }),
          })
        
          if (!response.ok) {
            throw new Error("Failed to login")
          }
        
          const data = await response.json()
        
          return data
    } catch (error) {
        return error
    }
 
}   