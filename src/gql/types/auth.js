import { gql } from 'apollo-server-express';

export default /* GraphQL */ gql`
	type Token {
		token: String
	}

	type Mutation {
		""" It allows users to register """
		registerUser(username:String!, email: String!, password: String!): Token

		""" It allows users to authenticate """
		loginUser(email: String!, password: String!): Token

		""" It allows to user to delete their account permanently """
		deleteMyUserAccount: DeleteResult
	}
`;