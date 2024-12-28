// store.js

import { create } from "zustand"
import { addEdge, applyNodeChanges, applyEdgeChanges } from "reactflow"

export const useStore = create((set, get) => ({
  nodes: [],
  edges: [],
  getNodeID: (type) => {
    const newIDs = { ...get().nodeIDs }
    if (newIDs[type] === undefined) {
      newIDs[type] = 0
    }
    newIDs[type] += 1
    set({ nodeIDs: newIDs })
    return `${type}-${newIDs[type]}`
  },
  addNode: (node) => {
    set({
      nodes: [...get().nodes, node],
    })
  },
  removeNode: (nodeId) => {
    set({
      nodes: get().nodes.filter((node) => node.id !== nodeId),
      edges: get().edges.filter(
        (edge) => edge.source !== nodeId && edge.target !== nodeId
      ),
    })
  },
  removeEdge: (edgeId) => {
    set({
      edges: get().edges.filter((edge) => edge.id !== edgeId),
    })
  },
  onNodesChange: (changes) => {
    set({
      nodes: applyNodeChanges(changes, get().nodes),
    })
  },
  onEdgesChange: (changes) => {
    set({
      edges: applyEdgeChanges(changes, get().edges),
    })
  },
  onConnect: (connection) => {
    set({
      edges: addEdge(
        {
          ...connection,
          type: "custom",
          animated: true,
        },
        get().edges
      ),
    })
  },
  updateNodeField: (nodeId, fieldName, fieldValue) => {
    set({
      nodes: get().nodes.map((node) => {
        if (node.id === nodeId) {
          node.data = { ...node.data, [fieldName]: fieldValue }
        }
        return node
      }),
    })
  },
}))