export type RecipeType = {
    	"id": number,
		"writer": {
			"id": number,
			"nickname": string,
		},
		"name": string,
		"description": string,
		"category": "KOREAN" | "JAPANESE" | "CHINESE" | "WESTERN",
		"food": [
			{
				"ingredient": string,
				"amount": string,
			}
		] 
	
  };

