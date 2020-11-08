export interface Items {
    _id: number,
    description: string,
    checked: boolean
}


export interface List {
    _id: number,
    name: string,
    items: Items[]
}

export function populateSchema(): List {

    return {
            "_id": 3,
            "name": "myList",
            "items": [
                {
                    "_id": 4,
                    "description": "Buy Milk",
                    "checked": false
                },
                {
                    "_id": 5,
                    "description": "Shovel snow",
                    "checked": false
                },
                {
                    "_id": 6,
                    "description": "Clear driveway",
                    "checked": false
                }
            ]
        }

}


