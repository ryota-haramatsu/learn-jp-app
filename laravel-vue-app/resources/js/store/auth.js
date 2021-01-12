import { OK,  UNPROCESSABLE_ENTITY } from '../util'

const state = {
    // ログイン済みユーザーを保持するuser
    user: null,
    apiStatus: null,
    loginErrorMessages: null
}

const getters = {}

const mutations = {
    // 第一引数はステート,実引数は第二引数から
    setUser(state, user) {
        state.user = user
    },
    setApiStatus(state, status) {
        state.apiStatus = status
    },
    setLoginErrorMessages(state, messages) {
        state.loginErrorMessages = messages
    }
}

const actions = {
    // 会員登録API
    // 第一引数はコンテキストオブジェクト(ミューテーションを呼び出すための commit メソッドなどが入っている)
    // setUserミューテーションを実行し、userステートを更新
    // アクション→コミットでミューテーション呼び出し→ステート更新
    async register(context, data) {
        // console.log('context: ' + context + '/ data:' + data)
        const response = await axios.post('/api/register', data)
            // .catch(error => {
            //     console.log("ERRRR: ",error.response.data);
            // });
        context.commit('setUser', response.data) 
    },
    async login(context, data) {
        context.commit('setApiStatus', null)
        const response = await axios.post('/api/login', data)
            // .catch(error => {
            //     console.log("Error: ", error.response.data);
            //     return error.response || error;
            // });
        
        // ステータスOK時
        if (response.status === OK) {
            context.commit('setApiStatus', true)
            context.commit('setUser', response.data)
            return false
        }

        // ステータス問題ある時
        context.commit('setApiStatus', false)
        // バリデーションエラー検知
        if (response.status === UNPROCESSABLE_ENTITY) {
            // バリデーションエラーの場合はルートコンポーネントに制御を渡さず、ページコンポーネント内でエラーの表示を行う
            context.commit('setLoginErrorMessages', response.data.errors)
        } else {
            // あるストアモジュールから別のモジュールのミューテーションを commit する場合は第三引数に { root: true } を追加
            context.commit('error/setCode', response.status, {root: true})
        }
    },
    async logout(context) {
        const response = await axios.post('/api/logout')
            // .catch(error => {
            //     console.log("Error: ",error.response.data);
            // });
        context.commit('setUser', null)
    }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
