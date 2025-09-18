(function() {
    const requests = [
        // from account-home.js
        {
            url: '/index.php',
            params: { page: 'account-home-ajax', action: 'load' }
        },
        {
            url: '/index.php',
            params: { page: 'account-home-ajax', action: 'reorder', id: '1' }
        },
        {
            url: '/index.php',
            params: { page: 'account-home-ajax', action: 'add_ticket', id: '1', ticket: 'test ticket' } 
        },
        {
            url: '/barcodes-all-search',
            params: { mode: 'add_device', manufacturer: 'TestManu', model_num: 'TestModel123' }
        },
        {
            url: '/barcodes-all-search',
            params: { mode: 'edit_device', id: '1', manufacturer: 'TestManuEdited' }
        },
        {
            url: '/barcodes-all-search',
            params: { mode: 'delete_device', device_id: '1' }
        },
        {
            url: '/category-all-search',
            params: { mode: 'create_category', category_name: 'TestCategoryFromJS' }
        },
        {
            url: '/category-all-search',
            params: { mode: 'edit_category', category_id: '1', category: 'EditedCategory' }
        },
        {
            url: '/category-all-search',
            params: { mode: 'delete_category', category_id: '1' }
        },

        {
            url: '/index.php',
            params: { page: 'checkout-ajax', checkout_action: 'reload_address', address_type: '3', address_book_user_id: '1' } // Example params
        },
        {
            url: '/index.php',
            params: { page: 'checkout-ajax', checkout_action: 'bill_to_shipping', nick_id: '1' } // Example params
        },

        {
            url: '/index.php',
            params: { page: 'segregation_group-ajax', action: 'createGroup', sg_name: 'TestGroup', sg_enable: '1' } // Example params
        },
        {
            url: '/index.php',
            params: { page: 'segregation_group-ajax', action: 'updateGroup', sg_id: '1', sg_name: 'TestGroupEdited' } // Example id and params
        }
    ];

    function sendRequests() {
        console.log('Starting to send automated POST requests...');
        requests.forEach(req => {
            const formData = new URLSearchParams();
            for (const key in req.params) {
                formData.append(key, req.params[key]);
            }

            fetch(req.url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                    'X-Requested-With': 'XMLHttpRequest'
                },
                body: formData
            })
            .then(response => {
                console.log(`Request to ${req.url} with params ${JSON.stringify(req.params)} finished with status: ${response.status}`);
                return response.text();
            })
            .then(text => {
                console.log(`Response body for ${req.url}:`, text);
            })
            .catch(error => {
                console.error(`Request to ${req.url} failed:`, error);
            });
        });
    }
    sendRequests();
})();
