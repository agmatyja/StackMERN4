import React from 'react';
import { PropTypes } from 'prop-types';
import './PostSummary.scss';
import HtmlBox from '../../common/HtmlBox/HtmlBox';

import Button from '../../common/Button/Button';
import SmallTitle from '../../common/SmallTitle/SmallTitle';
import cutText from '../../../utils/cutText';

const PostSummary = ({ id, title, content }) => (
  <article className="post-summary">
    <SmallTitle>{title}</SmallTitle>
    <HtmlBox>{cutText(content, 250)}</HtmlBox> 
    <a href={"/posts/" + id}>
	  <Button variant="primary">Read more</Button>
	</a>
  </article>
);

PostSummary.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  content: PropTypes.string,
};

export default PostSummary;
