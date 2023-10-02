// Outputs: /users.json
import users from '../data/users.json'

export async function GET({params, request}) {
  return new Response(
    JSON.stringify(users)
  )
}
