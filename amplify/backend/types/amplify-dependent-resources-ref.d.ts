export type AmplifyDependentResourcesAttributes = {
    "function": {
        "blogEntries": {
            "Name": "string",
            "Arn": "string",
            "Region": "string",
            "LambdaExecutionRole": "string"
        },
        "allBlogEntries": {
            "Name": "string",
            "Arn": "string",
            "Region": "string",
            "LambdaExecutionRole": "string"
        }
    },
    "api": {
        "api": {
            "RootUrl": "string",
            "ApiName": "string",
            "ApiId": "string"
        }
    }
}