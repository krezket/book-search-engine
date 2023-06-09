import gql from 'graphql-tag';

export const ADD_USER = gql`
    
    mutation addUser($username: String!, $email: String!, $password: String!) {
        addUser (username: $username, email: $email, password: $password) {
            token
            user {
                _id
                username
                email
                password
            }
        }
    }
    
`;

export const LOGIN_USER = gql`

    mutation login($email: String!, $password: String!) {
        login(email: $email, password: $password) {
            token
            user {
                _id
                username
                password
            }
        }
    }

`;

export const SAVE_BOOK = gql`
    
    mutation saveBook($input: booksInput) {
        saveBook(input: $input) {
            _id
            username
            email
            bookCount
            savedBooks {
                authors
                bookId
                description
                image
                title
                link
            }
        }
    }
`;

export const REMOVE_BOOK = gql`

    mutation removeBook($bookId: ID!) {
        removeBook(bookId: $bookId) {
            _id
            username
            email
            bookCount
            savedBooks {
                bookId
                authors
                title
                description
                image
                link
            }
        }
    }

`;