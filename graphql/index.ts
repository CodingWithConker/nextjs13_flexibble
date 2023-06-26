export const getUserQuery = `
    query GetUser($email: String!){
        user(by: {email: $email}){
            id
            name
            email
            avatarUrl
            description
            githubUrl
            linkedinUrl
        }
    }
`

export const createUserMutation = `
    mutation CreateUser($input: UserCreateInput!){
        userCreate(input: $input){
            user{
                name
                email
                avatarUrl
                descriptionhubUrl
                linkedinUrl
                id
            }
        }
    }
`

// The above is regular graphql