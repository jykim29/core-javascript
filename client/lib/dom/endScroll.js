import { isString } from '../utils/index.js';
import { getNode } from './getNode.js';

export function endScroll(node) {
  if (isString(node)) node = getNode(node);
  return (node.scrollTop = node.scrollHeight);
}
