
// !! THIS IS FOR DEMONTRATIONAL PURPOSES ONLY
// !!! UNSAFE !!!
const StateManager = (function() {
    let instance;

    function createInstance() {
        const state = {
            currentAccount: loadState('currentAccount') || null,
            accountList: loadState('accountList') || []
        };

        function saveState(key, value) {
            localStorage.setItem(key, JSON.stringify(value));
        }

        function loadState(key) {
            const value = localStorage.getItem(key);
            return value ? JSON.parse(value) : null;
        }

        return {
            addAccount: function(accountData) {
                // Check if the accountList has an element with the same username and password
                const accountExists = state.accountList.some(account =>
                    account.username === accountData.username || account.email === accountData.email || 
                    account.phone === accountData.phone
                );

                if (!accountExists) {
                    state.accountList.push(accountData);
                    saveState('accountList', state.accountList);
                    state.currentAccount = accountData;
                    console.log('Account added successfully');
                    return true;
                } else {
                    return false;
                }
            },
            getCurrentAccount: function() {
                return state.currentAccount;
            },
            getAccountList: function() {
                return state.accountList;
            },
            tryLogin: function(username, password) {
                // Check if the accountList has an element with the same username and password
                const account = state.accountList.find(account =>
                    (account.username === username || account.email === username) && account.password === password
                );

                if (account) {
                    state.currentAccount = account;
                    saveState('currentAccount', state.currentAccount);
                    console.log('Login successful');
                    return true;
                } else {
                    console.log('Invalid username or password');
                    state.currentAccount = null;
                    return false;
                }
            },
            signOut: function(){
                currentAccount = null;
            }
        };
    }

    return {
        getInstance: function() {
            if (!instance) {
                instance = createInstance();
            }
            return instance;
        }
    };
})();