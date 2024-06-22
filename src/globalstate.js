
// !! THIS IS FOR DEMONTRATIONAL PURPOSES ONLY
// !!! UNSAFE !!!
const StateManager = (function() {
    let instance;

    function createInstance() {
        const state = {
            currentAccount: loadState('currentAccount') || null,
            accountList: loadState('accountList') || [],
            loggedIn: loadState('isLoggedIn') || false
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
                    loggedIn = false;
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
                    saveState('isLoggedIn', true);
                    //alert('Login successful');
                    state.loggedIn = true;
                    return true;
                } else {
                    //alert('Invalid username or password');
                    saveState('currentAccount', null);
                    saveState('isLoggedIn', false);
                    state.currentAccount = null;
                    state.loggedIn = false;
                    return false;
                }
            },
            signOut: function(){
                state.currentAccount = null;
                state.loggedIn = false;
                saveState('currentAccount', null);
                saveState('isLoggedIn', false);
            },
            isLoggedIn: function(){
                return state.loggedIn;
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

function addAccount(accountData){
    StateManager.getInstance().addAccount(accountData);
}

function getCurrentAccount(){
    return StateManager.getInstance().getCurrentAccount();
}

function getAccountList(){
    return StateManager.getInstance().getAccountList();
}

function isLoggedIn(){
    return StateManager.getInstance().isLoggedIn();
}