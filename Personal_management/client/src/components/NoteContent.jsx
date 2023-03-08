import React, { useEffect, useState } from 'react'
import { ContentState, convertFromHTML, convertFromRaw, EditorState } from 'draft-js'
import { Editor } from 'react-draft-wysiwyg'
import draftToHtml from 'draftjs-to-html'
import { useLoaderData } from 'react-router-dom'
const NoteContent = () => {
  const { note } = useLoaderData()

  const [editor, setEditor] = useState(() => { return EditorState.createEmpty() })
  const [rawHTML, setRawHTML] = useState(note.content)

  useEffect(() => {
    const blocksFromHTML = convertFromHTML(note.content)
    const state = ContentState.createFromBlockArray(
      blocksFromHTML.contentBlocks,
      blocksFromHTML.entityMap
    )
    setEditor(EditorState.createWithContent(state))
  }, [note.id])

  useEffect(() => {
    setRawHTML(note.content)
  }, [note.content])

  const handleOnChange = (e) => {
    setEditor(e)
    setRawHTML(draftToHtml(convertFromRaw(e.getCurrentContent())))
  }
  return (
    <Editor editorState={editor} onEditorStateChange={handleOnChange} placeholder='Write something....'>

    </Editor>
  )
}

export default NoteContent