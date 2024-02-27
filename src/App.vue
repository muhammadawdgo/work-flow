<script>
import "@vue-flow/core/dist/style.css";
import "@vue-flow/core/dist/theme-default.css";
import '@vue-flow/controls/dist/style.css';
import '@vue-flow/minimap/dist/style.css';
import {onMounted, toRefs,onErrorCaptured, defineComponent, reactive , inject} from "vue";

import { VueFlow, useVueFlow } from "@vue-flow/core";

import * as _ from "lodash";

import { Background } from '@vue-flow/background';
import { Controls } from '@vue-flow/controls';
import { MiniMap } from '@vue-flow/minimap';
import Swal from "sweetalert2/dist/sweetalert2.min.js";

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
        // apps
        { id: 'app-1', label: 'MOBILE APP',type:'app', position: { x: 0, y: 0 }, class: 'default', style: { backgroundColor: 'orange' }},


        // services
        { id: 'service-1', label: 'MOBILE BFF', position: { x: 250, y: 0 }, class: 'default' },
        { id: 'service-2', label: 'CATALOG', position: { x: 600, y: 0 }, class: 'default' ,parentNode: 'p1'},


        // connections
        { id: 'connection-1', label: 'Redis', position: { x: 200, y: 800 }, class: 'default' ,
          style: { backgroundColor: 'rgba(255,1,39,0.75)',color:"#FFF" },
        },
        { id: 'connection-2', label: 'MYSQL', position: { x: 500, y: 800 }, class: 'default' ,
          style: { backgroundColor: 'rgba(255,1,39,0.75)',color:"#FFF" },
        },


        // requests
        { id: 'request-1', label: 'RQ', position: { x: 0, y: 100 }, class: 'bg-request',
          style: { backgroundColor: 'rgba(16, 185, 129, 0.5)', width: '40px', height: '40px',borderRadius:"50%" },
          data:{
            request:{},
            response:{},
          }
        },
        { id: 'request-2', label: 'RQ', position: { x: 400, y: 100 }, class: 'bg-request',
          style: { backgroundColor: 'rgba(16, 185, 129, 0.5)', width: '40px', height: '40px',borderRadius:"50%" },
          data:{
            request:{},
            response:{},
          }
        },
        { id: 'request-3', label: 'RQ', position: { x: 200, y: 200 }, class: 'bg-request',
          style: { backgroundColor: 'rgba(16, 185, 129, 0.5)', width: '40px', height: '40px',borderRadius:"50%" },
          data:{
            request:{},
            response:{},
          }
        },
        { id: 'request-4', label: 'RQ', position: { x: 600, y: 300 }, class: 'bg-request',
          style: { backgroundColor: 'rgba(16, 185, 129, 0.5)', width: '40px', height: '40px',borderRadius:"50%" },
          data:{
            request:{},
            response:{},
          }
        },
        { id: 'request-5', label: 'RQ', position: { x: 500, y: 400 }, class: 'bg-request',
          style: { backgroundColor: 'rgba(16, 185, 129, 0.5)', width: '40px', height: '40px',borderRadius:"50%" },
          data:{
            request:{},
            response:{},
          }
        },
        { id: 'request-6', label: 'RQ', position: { x: 0, y: 200 }, class: 'bg-request',
          style: { backgroundColor: 'rgba(16, 185, 129, 0.5)', width: '40px', height: '40px',borderRadius:"50%" },
          data:{
            request:{},
            response:{},
          }
        },
        { id: 'request-7', label: 'RQ', position: { x: 300, y: 300 }, class: 'bg-request',
          style: { backgroundColor: 'rgba(16, 185, 129, 0.5)', width: '40px', height: '40px',borderRadius:"50%" },
          data:{
            request:{},
            response:{},
          }
        },

        { id: 'response-1', label: 'RS', position: { x: 500, y: 200 }, class: 'bg-request',
          style: { backgroundColor: 'rgba(255,1,39,0.75)', width: '40px', height: '40px',borderRadius:"50%" },
          data:{
            request:{},
            response:{},
          }
        },
      ],
      edges:[
        {
          id:'app-1-request-1',
          label: 'Check Update',
          source: 'app-1',
          target: 'request-1',
          animated: false,
          data:{
            serial_api_flow:['app-1-request-1','request-1-service-1','service-1-request-2','request-2-connection-1','connection-1-response-1','response-1-service-1','service-1-request-3','request-3-service-2','connection-1-service-2','service-2-connection-2','service-2-connection-1','service-2-request-4','request-4-connection-2','service-2-request-5','request-5-connection-1'],
            nodes:['app-1','service-1','service-2','request-1','request-2','request-3','response-1']
          }
        },
        {
          id:'request-1-service-1',
          label: '',
          source: 'request-1',
          target: 'service-1',
          animated: false,
          data:{
            serial_api_flow:['app-1-request-1','request-1-service-1','service-1-request-2','request-2-connection-1','connection-1-response-1','response-1-service-1','service-1-request-3','request-3-service-2','connection-1-service-2','service-2-connection-2','service-2-connection-1','service-2-request-4','request-4-connection-2','service-2-request-5','request-5-connection-1'],
            nodes:['app-1','service-1','service-2','request-1','request-2','request-3','response-1']
          }
        },
        {
          id:'service-1-request-2',
          label: 'Reading',
          source: 'service-1',
          target: 'request-2',
          animated: false,
          data:{
            serial_api_flow:['app-1-request-1','request-1-service-1','service-1-request-2','request-2-connection-1','connection-1-response-1','response-1-service-1','service-1-request-3','request-3-service-2','connection-1-service-2','service-2-connection-2','service-2-connection-1','service-2-request-4','request-4-connection-2','service-2-request-5','request-5-connection-1'],
            nodes:['app-1','service-1','service-2']
          }
        },
        {
          id:'request-2-connection-1',
          label: 'Redis',
          source: 'request-2',
          target: 'connection-1',
          animated: false,
          data:{
            serial_api_flow:['app-1-request-1','request-1-service-1','service-1-request-2','request-2-connection-1','connection-1-response-1','response-1-service-1','service-1-request-3','request-3-service-2','connection-1-service-2','service-2-connection-2','service-2-connection-1','service-2-request-4','request-4-connection-2','service-2-request-5','request-5-connection-1'],
            nodes:['app-1','service-1','service-2']
          }
        },
        {
          id:'connection-1-response-1',
          label: 'Response',
          source: 'connection-1',
          target: 'response-1',
          animated: false,
          data:{
            serial_api_flow:['app-1-request-1','request-1-service-1','service-1-request-2','request-2-connection-1','connection-1-response-1','response-1-service-1','service-1-request-3','request-3-service-2','connection-1-service-2','service-2-connection-2','service-2-connection-1','service-2-request-4','request-4-connection-2','service-2-request-5','request-5-connection-1'],
            nodes:['app-1','service-1','service-2']
          }
        },
        {
          id:'response-1-service-1',
          label: '',
          source: 'response-1',
          target: 'service-1',
          animated: false,
          data:{
            serial_api_flow:['app-1-request-1','request-1-service-1','service-1-request-2','request-2-connection-1','connection-1-response-1','response-1-service-1','service-1-request-3','request-3-service-2','connection-1-service-2','service-2-connection-2','service-2-connection-1','service-2-request-4','request-4-connection-2','service-2-request-5','request-5-connection-1'],
            nodes:['app-1','service-1','service-2']
          }
        },
        {
          id:'service-1-request-3',
          label: 'api/v2/internal-check-update',
          source: 'service-1',
          target: 'request-3',
          animated: false,
          data:{
            serial_api_flow:['app-1-request-1','request-1-service-1','service-1-request-2','request-2-connection-1','connection-1-response-1','response-1-service-1','service-1-request-3','request-3-service-2','connection-1-service-2','service-2-connection-2','service-2-connection-1','service-2-request-4','request-4-connection-2','service-2-request-5','request-5-connection-1'],
            nodes:['app-1','service-1','service-2']
          }
        },
        {
          id:'request-3-service-2',
          label: '',
          source: 'request-3',
          target: 'service-2',
          animated: false,
          data:{
            serial_api_flow:['app-1-request-1','request-1-service-1','service-1-request-2','request-2-connection-1','connection-1-response-1','response-1-service-1','service-1-request-3','request-3-service-2','connection-1-service-2','service-2-connection-2','service-2-connection-1','service-2-request-4','request-4-connection-2','service-2-request-5','request-5-connection-1'],
            nodes:['app-1','service-1','service-2']
          }
        },
        {
          id:'service-2-request-4',
          label: 'Read',
          source: 'service-2',
          target: 'request-4',
          animated: false,
          data:{
            serial_api_flow:['app-1-request-1','request-1-service-1','service-1-request-2','request-2-connection-1','connection-1-response-1','response-1-service-1','service-1-request-3','request-3-service-2','connection-1-service-2','service-2-connection-2','service-2-connection-1','service-2-request-4','request-4-connection-2','service-2-request-5','request-5-connection-1'],
            nodes:['app-1','service-1','service-2']
          }
        },
        {
          id:'request-4-connection-2',
          label: 'Read',
          source: 'request-4',
          target: 'connection-2',
          animated: false,
          data:{
            serial_api_flow:['app-1-request-1','request-1-service-1','service-1-request-2','request-2-connection-1','connection-1-response-1','response-1-service-1','service-1-request-3','request-3-service-2','connection-1-service-2','service-2-connection-2','service-2-connection-1','service-2-request-4','request-4-connection-2','service-2-request-5','request-5-connection-1'],
            nodes:['app-1','service-1','service-2']
          }
        },
        {
          id:'service-2-request-5',
          label: 'Write',
          source: 'service-2',
          target: 'request-5',
          animated: false,
          data:{
            serial_api_flow:['app-1-request-1','request-1-service-1','service-1-request-2','request-2-connection-1','connection-1-response-1','response-1-service-1','service-1-request-3','request-3-service-2','connection-1-service-2','service-2-connection-2','service-2-connection-1','service-2-request-4','request-4-connection-2','service-2-request-5','request-5-connection-1'],
            nodes:['app-1','service-1','service-2']
          }
        },
        {
          id:'request-5-connection-1',
          label: 'Write',
          source: 'request-5',
          target: 'connection-1',
          animated: false,
          data:{
            serial_api_flow:['app-1-request-1','request-1-service-1','service-1-request-2','request-2-connection-1','connection-1-response-1','response-1-service-1','service-1-request-3','request-3-service-2','connection-1-service-2','service-2-connection-2','service-2-connection-1','service-2-request-4','request-4-connection-2','service-2-request-5','request-5-connection-1'],
            nodes:['app-1','service-1','service-2']
          }
        },
          //

        {
          id:'app-1-request-6',
          label: '/user',
          source: 'app-1',
          target: 'request-6',
          animated: false,
          data:{
            serial_api_flow:['app-1-request-6','request-6-service-2','service-2-request-7','request-7-connection-2'],
            nodes:['app-1','service-2']
          }
        },
        {
          id:'request-6-service-2',
          label: '',
          source: 'request-6',
          target: 'service-2',
          animated: false,
          data:{
            serial_api_flow:['app-1-request-6','request-6-service-2','service-2-request-7','request-7-connection-2'],
            nodes:['app-1','service-2']
          }
        },
        {
          id:'service-2-request-7',
          label: '',
          source: 'service-2',
          target: 'request-7',
          animated: false,
          data:{
            serial_api_flow:['app-1-request-6','request-6-service-2','service-2-request-7','request-7-connection-2'],
            nodes:['app-1','service-2']
          }
        },
        {
          id:'request-7-connection-2',
          label: '',
          source: 'request-7',
          target: 'connection-2',
          animated: false,
          data:{
            serial_api_flow:['app-1-request-6','request-6-service-2','service-2-request-7','request-7-connection-2'],
            nodes:['app-1','service-2']
          }
        },
      ]
    })
    const onClickNode = (event) => {
      Swal.fire({
        html:`
          <div>:: REQUEST ::</div><br>
          <div>
                <pre><code>{{${JSON.stringify(event.node.data)}}}</code></pre>
          </div>
          <hr>
          <div>:: RESPONSE ::</div><br>
          <div>
                <pre><code>{{${JSON.stringify(event.node.data)}}}</code></pre>
          </div>
        `
      })
    };
    const onClickEdge = (event) => {
      let serial_api_flow = event.edge.data.serial_api_flow;
      let nodes = event.edge.data.nodes;
      let edges_result = [];
      let nodes_result = [];
      _.forEach(state.edges,(i) => {
        if (serial_api_flow.includes(i.id)){
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
        <template #node-app="options">
          <div class="vue-flow__node-default nopan selectable default" :class="options.class" :style="options.style">
            {{options.label}}
          </div>
        </template>
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
