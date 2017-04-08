
const user ={
    user: {
        namespace: 'users/',
        methods: {
            get: ( ) => ({ path: '' }),

            add: (data) => ({path:''},{options:{
                method:'POST',                
                body:JSON.stringify(data),
            }}),
        }
    }
}

export default user


