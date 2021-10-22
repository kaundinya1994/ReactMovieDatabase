import React from 'react'
import PropTypes from 'prop-types';

// Helper
import { calcTime, convertMoney } from '../../helpers'

// Styles
import { Wrapper, Content } from './MovieInfoBar.styles'

const MovieInfoBar = ({time,budget,revenue}) => {

    console.log(time,budget,revenue)

    return (

        <Wrapper>
            <Content>
                <div className="column">
                    <h4>{calcTime(time)}</h4>
                </div>
                <div className="column">
                    <h4>{convertMoney(budget)}</h4>
                </div>
                <div className="column">
                    <h4>{convertMoney(revenue)}</h4>
                </div>
            </Content>
        </Wrapper>

    )
}
MovieInfoBar.propTypes = {
    time: PropTypes.number,
    budget: PropTypes.number,
    revenue: PropTypes.number
  };
export default MovieInfoBar