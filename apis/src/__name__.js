const <%= name %>  ={
    <%= name %> : {
        namespace: '<%= Name %>s/',  
        methods: {
            get: ( ) => ({ path: '' }),

            add: (data) => ({path:''},{options:{
                method:'POST',                
                body:JSON.stringify(data),
            }}),
        }
    }
}

export default <%= name %> 