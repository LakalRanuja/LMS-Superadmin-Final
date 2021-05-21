import useJwt from '@src/auth/jwt/useJwt'

const config = useJwt.jwtConfig

export const adminUpdateActionType = () => {
    return dispatch => {
        dispatch({
            type: 'UPDATE_ADMIN',
            data,
        })
    }
}
