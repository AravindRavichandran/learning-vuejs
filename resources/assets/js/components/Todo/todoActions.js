export const getTodos = function(store) {
    this.$http.get('api/v1/todos').then((response) => {
        if (response.data.length > 0) {
            var dispatch = store.dispatch;
            dispatch('GET_TODOS', response.data);
        }
    });
}

export const saveTodo = function(store, postData) {
    this.$http.post('api/v1/todo', postData).then((response) =>  {
        /*check if it's a success*/
        if (response.status == 201) {
            var dispatch = store.dispatch;
            dispatch('ADD_TODO', response.data);
        }
    }).catch((response) => {
        console.log('Error', response);
    });
}
