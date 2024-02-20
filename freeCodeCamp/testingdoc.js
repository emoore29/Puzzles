let array = [1, 2, 3, 4, 5]

let copyArr = [...array]
copyArr.splice(0, 1)
copyArr
array


const defaultState = {
    user: 'CamperBot',
    status: 'offline',
    friends: '732,982',
    community: 'freeCodeCamp'
  };


let newObj = Object.assign({}, defaultState, { status: "online" })
newObj