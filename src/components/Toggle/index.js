import React, { Component } from "react"

import * as S from "./styled"
import links from "./content"

class Toggle extends React.Component {
  state = {
    on: false,
  }

  toggle = () => {
    this.setState({
      on: !this.state.on,
    })
  }
  render() {
    return (
      <S.ToggleWrapper>
        <S.ToggleBtn onClick={this.toggle}>
          <S.ToggleBtnLine />
          <S.ToggleBtnLine />
          <S.ToggleBtnLine />
        </S.ToggleBtn>
        {this.state.on && (
          <S.ToggleBox>
            <S.ToggleLinksList>
              {links.map((link, i) => (
                <S.ToggleLinksItem key={i}>
                  <S.ToggleLinksLink activeClassName="active" to={link.url}>
                    {link.label}
                  </S.ToggleLinksLink>
                </S.ToggleLinksItem>
              ))}
            </S.ToggleLinksList>
          </S.ToggleBox>
        )}
      </S.ToggleWrapper>
    )
  }
}

export default Toggle
