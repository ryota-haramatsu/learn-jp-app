/**
 * クッキーの値を取得する
 * @param {String} searchKey 検索するキー
 * @returns {String} キーに対応する値
 */
export function getCookieValue (searchKey) {
    if (typeof searchKey === 'undefined') {
      return ''
    }
  
    let val = ''
  
    // ;で分割しforEach内でkeyとvalueに=の左辺と右辺を代入
    // もしkeyと引数searchKeyが同じならvalueを返す
    document.cookie.split(';').forEach(cookie => {
      const [key, value] = cookie.split('=')
      if (key === searchKey) {
        return val = value
      }
    })
  
    return val
}

/**
 * レスポンスコードのハードコードを避ける
 */
export const OK = 200
export const CREATED = 201
export const UNPROCESSABLE_ENTITY = 422 // バリデーションエラー
export const INTERNAL_SERVER_ERROR = 500
