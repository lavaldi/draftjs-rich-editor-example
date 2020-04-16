import React, { useState } from 'react';
import {
  Editor,
  EditorState,
  RichUtils,
  getDefaultKeyBinding,
  KeyBindingUtil,
  ContentState,
  convertFromHTML
} from 'draft-js'
import { stateToHTML } from 'draft-js-export-html'
import Toolbar from './Toolbar'
import Button from './Button'
import Icon from './Icon'
import './styles.css'

const keyBindingFunction = event => {
  if (KeyBindingUtil.hasCommandModifier(event) && event.shiftKey && event.key === 'x') {
    return 'strikethrough';
  }
  return getDefaultKeyBinding(event);
}

const RichEditor = ({ initialValue }) => {
  let state;
  if (initialValue) {
    const blocksFromHTML = convertFromHTML(initialValue);
    state = ContentState.createFromBlockArray(
      blocksFromHTML.contentBlocks,
      blocksFromHTML.entityMap,
    );
  }
  const [editorState, setEditorState] = useState(
    state ? EditorState.createWithContent(state) : EditorState.createEmpty()
  );

  const toggleFormat = (event, type) => {
    event.preventDefault();
    const format = event.currentTarget.getAttribute('data-format');

    if (type === 'inline') setEditorState(RichUtils.toggleInlineStyle(editorState, format));
    else setEditorState(RichUtils.toggleBlockType(editorState, format));
  }

  const handleKeyCommand = command => {
    // inline formatting key commands handles bold, italic, code, underline
    let newEditorState = RichUtils.handleKeyCommand(editorState, command);

    // If RichUtils.handleKeyCommand didn't find anything, check for our custom
    // strikethrough command and call `RichUtils.toggleInlineStyle` if we find it
    if (!newEditorState && command === 'strikethrough') {
      newEditorState = RichUtils.toggleInlineStyle(editorState, 'STRIKETHROUGH');
    }

    if (newEditorState) {
      setEditorState(newEditorState);
      return 'handled';
    }

    return 'not-handled';
  }

  const ToolButton = ({ format, icon, type }) => {
    let isActive;

    if (type === 'inline') {
      const currentInlineStyle = editorState.getCurrentInlineStyle();
      isActive = currentInlineStyle.has(format);
    } else {
      const currentBlockType = RichUtils.getCurrentBlockType(editorState);
      isActive = currentBlockType === format
    }

    return (
      <Button active={isActive} data-format={format} onMouseDown={event => toggleFormat(event, type)}>
        <Icon>{icon}</Icon>
      </Button>
    );
  }

  // to patch placeholder issue
  const contentState = editorState.getCurrentContent();
  let showPlaceholder = false;
  if (!contentState.hasText()) {
    if (contentState.getBlockMap().first().getType() === 'unstyled') {
      showPlaceholder = true;
    }
  }

  // export HTML
  console.log(stateToHTML(contentState));

  return (
    <div className={!showPlaceholder ? 'hide-placeholder' : ''}>
      <Toolbar>
        <ToolButton format="BOLD" icon="format_bold" type="inline" />
        <ToolButton format="ITALIC" icon="format_italic" type="inline" />
        <ToolButton format="UNDERLINE" icon="format_underlined" type="inline" />
        <ToolButton format="STRIKETHROUGH" icon="strikethrough_s" type="inline" />
        <ToolButton format="CODE" icon="code" type="inline" />
        <ToolButton format="unordered-list-item" icon="format_list_bulleted" type="block" />
      </Toolbar>
      <Editor
        placeholder="Enter some rich text…"
        editorState={editorState}
        onChange={setEditorState}
        handleKeyCommand={handleKeyCommand}
        keyBindingFn={keyBindingFunction}
      />
    </div>
)
};

export default RichEditor;