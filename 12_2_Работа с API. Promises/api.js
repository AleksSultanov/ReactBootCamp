const productsUrl = 'https://dummyjson.com/products';

function customFetch(url,options){
    return fetch(url,{
        headers : {
            'Content-Type': 'charset=utf-8',
        },
        ...options
    })
    .then(response => {
        if (response.status !== 200) {
            throw new Error ("error message");
        }
        return response.json();
    })
    .catch(error => {
        console.log("error:");
        console.log(error);
    });
    ;
}
export function getProducts() {
    // fetch(url);
    return customFetch(productsUrl,{
        'Authorization': "token",
        headers : {
            'Content-Type': 'application/json; charset=utf-8',
        }
    })
}

export function createProducts(product) {
    return customFetch(`${productsUrl}/add`,{
        method : 'POST',
        body: JSON.stringify(product)
    });
}

export function deleteProducts(productIs) {
    return customFetch(`${productsUrl}/${productIs}`,{
        method : 'DELETE'
    });
}

export function editProducts(product,productIs) {
    return customFetch(`${productsUrl}/${productIs}`,{
        method : 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ product})
    });
}
 