import React from 'react'

import * as S from './styled'

const toggle = () => {
    // state = {
	// 	on: false,
	// }

	// toggle = () => {
	// 	this.setState({
	// 		on: !this.state.on
	// 	})
	// }
    return (
        <S.ToggleBtn>
            <S.ToggleBtnRow />
        </S.ToggleBtn>
    )
}

export default toggle;