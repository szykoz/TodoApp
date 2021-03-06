import { FlingGestureHandler } from "react-native-gesture-handler";
import { forModalPresentationIOS } from "@react-navigation/stack/lib/commonjs/TransitionConfigs/CardStyleInterpolators";

export default tempData = [
    {
        id: 1,
        name: "Plan a trip",
        color: "#24A6D9",
        todos: [
            {
                title: "Book Flight",
                completed: false
            },
            {
                title: "Passport Check",
                completed: true
            },
            {
                title: "Reserve Hotel Room",
                completed: true
            },
            {
                title: "Pack Luggage",
                completed: false
            }
        ]
    },
    {
        id: 2,
        name: "Shopping List",
        color: "#8022D9",
        todos: [
            {
                title: "Milk",
                completed: false
            },
            {
                title: "Bread",
                completed: false
            },
            {
                title: "Mineral water",
                completed: false
            },
            {
                title: "Chocolate",
                completed: true
            },
            {
                title: "Beer",
                completed: true
            }
        ]
    },
    {
        id: 3,
        name: "Birthday Party",
        color: "#e76969",
        todos: [
            {
                title: "Buy a present",
                completed: false
            },
            {
                title: "Buy alkohol",
                completed: true
            },
            {
                title: "Write wishes",
                completed: false
            }
        ]
    }
]