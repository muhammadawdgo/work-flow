<script>
import "@vue-flow/core/dist/style.css";
import "@vue-flow/core/dist/theme-default.css";
import '@vue-flow/controls/dist/style.css';
import '@vue-flow/minimap/dist/style.css';
import {onMounted, toRefs,onErrorCaptured, defineComponent, reactive} from "vue";

import { VueFlow, useVueFlow } from "@vue-flow/core";

import * as _ from "lodash";

import { Background } from '@vue-flow/background';
import { Controls } from '@vue-flow/controls';
import { MiniMap } from '@vue-flow/minimap';

export default defineComponent({
  name: 'all-elements',
  components:{
    VueFlow,Background,Controls,MiniMap
  },
  setup(){
    onErrorCaptured((e)=>{
      console.log(e)
    })
    const {
      onPaneReady,
    } = useVueFlow();

    onPaneReady(({ fitView }) => {
      fitView();
    });

    const state = reactive({
      nodes:[
        { id: '1', label: 'Service 1', position: { x: 150, y: 0 }, class: 'default' },
        { id: '2', label: 'Service 2', position: { x: 400, y: 100 }, class: 'default' },
        { id: '3', label: 'Service 3', position: { x: 300, y: 250 }, class: 'default' },
        { id: '4', label: 'Service 4', position: { x: 400, y: 400 }, class: 'default' },
        { id: '5', label: 'Service 5', position: { x: 100, y: 500 }, class: 'default' },
        { id: '6', label: 'Service 6', position: { x: 100, y: 350 }, class: 'default' },
      ],
      edges:[
        {
          id: 'e1-3',
          label: 'Request 1',
          source: '1',
          target: '3',
          animated: false,
          data:{
            serialAPI:['e1-3','e3-4'],
            nodes:['1','3','4']
          }
        },
        {
          id: 'e3-4',
          // type: 'smoothstep',
          label: 'Request 1',
          source: '3',
          target: '4',
          animated: false,
          data:{
            serialAPI:['e1-3','e3-4'],
            nodes:['1','3','4']
          }
        },
        {
          id: 'e4-5',
          label: 'Request 2',
          source: '3',
          target: '5',
          animated: false,
          data:{
            serialAPI:['e1-2','e4-5'],
            nodes:['2','3','5']
          }
        },
        {
          id: 'e1-2',
          label: 'Request 2',
          source: '2',
          target: '3',
          animated: false,
          data:{
            serialAPI:['e1-2','e4-5'],
            nodes:['2','3','5']
          }
        },
        {
          id: 'e3-6',
          label: 'Request 3',
          source: '3',
          target: '6',
          animated: false,
          data:{
            serialAPI:['e3-6'],
            nodes:['3','6']
          }
        },
      ]
    })
    const onClickNode = (event) => {
      console.log("clicked")
      console.log(event)
    };
    const onClickEdge = (event) => {
      let serialAPI = event.edge.data.serialAPI;
      let nodes = event.edge.data.nodes;
      let edges_result = [];
      let nodes_result = [];
      _.forEach(state.edges,(i) => {
        if (serialAPI.includes(i.id)){
          i.animated = true;
          i['style'] = { stroke: 'red' }
          i['labelBgStyle'] =  { fill: 'orange' }
        }else{
          i.animated = false;
          i['style'] = {}
          i['labelBgStyle'] = {}
        }
        edges_result.push(JSON.parse(JSON.stringify(i)))
      });
      _.forEach(state.nodes,(i) => {
        if (nodes.includes(i.id)){
          i.class = "active"
        }else{
          i.class = "not_active"
        }
        nodes_result.push(JSON.parse(JSON.stringify(i)))
      });
      state.nodes = nodes_result
      state.edges = edges_result
    };
    const onChange = (event) => {
      console.log("changed")
      console.log(event)
    };

    return {
      ...toRefs(state),
      onClickNode,
      onClickEdge,
      onChange,
    }
  }
})
</script>

<template>
  <!-- {{ store }} -->
  <div class="d-flex" style="height: 100vh">
<!--    <globalMenuVue></globalMenuVue>-->

    <div class="m-1 border"
         id="vue_flow"
         oncontextmenu="return false;"
         style="position: relative; width: 100%">
      <VueFlow
               :nodes="nodes"
               :edges="edges"
               class="customnodeflow"
               :snap-to-grid="true"
               :select-nodes-on-drag="true"
               :only-render-visible-elements="true"
               :max-zoom="50"
               :min-zoom="0.05"
               @nodeDoubleClick="onClickNode"
               @edgeDoubleClick="onClickEdge">
        <Background pattern-color="grey" gap="16" size="1.2" />
        <Controls />
        <MiniMap />
      </VueFlow>
    </div>


  </div>
</template>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 1s 0.1s;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

html,
body,
#app {
  margin: 0;
  height: 100%;
}

#app {
  font-family: 'Roboto', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.customnodeflow button {
  padding: 5px;
  width: 25px;
  height: 25px;
  border-radius: 25px;
  box-shadow: 0 5px 10px #0000004d;
  cursor: pointer;
}

.customnodeflow button:hover {
  opacity: 0.9;
  transform: scale(105%);
  transition: 0.25s all ease;
}

/* VueFlow Specifics */
.vue-flow {
  background-color: #f2f5f7;
}

/* .vue-flow__edges {
  z-index: 9999 !important;
} */

/* Customize Handle */
.handle {
  cursor: pointer !important;
}

/* Select the MiniMap */
.vue-flow__minimap {
  border-radius: 10%;
}

/* Select Control and Control Button */
.vue-flow__controls {
  background-color: white;
  padding: 0.15rem;
  border-radius: 1rem;
}

.vue-flow__controls-button {
  margin: 0.3rem;
  border: 1px grey solid;
}
.active{
  border:1px solid orange;
}
.not_active{
  background: #dadada7a;
  color: #999;
}
</style>
