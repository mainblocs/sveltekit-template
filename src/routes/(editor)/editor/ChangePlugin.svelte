<script lang="ts">
    import {onMount} from 'svelte';
    import {
      createEmptyHistoryState,
      registerHistory,
      type HistoryState,
    } from '@lexical/history';
    import type {LexicalEditor} from 'lexical';
	import { getEditor } from 'svelte-lexical';
  
    const editor: LexicalEditor = getEditor();
    export let externalHistoryState: HistoryState = createEmptyHistoryState();
    export let delay = 1000;
  
    // returns callback to unregister
    onMount(() => editor.registerUpdateListener(({editorState}) => {
        // The latest EditorState can be found as `editorState`.
        // To read the contents of the EditorState, use the following API:

        editorState.read(() => {
            console.log('editorState',editorState.toJSON(),null,2);
        })
    }))
  </script>