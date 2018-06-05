module.exports = function(RED) {
  function AggregatedNode(config) {
    RED.nodes.createNode(this, config);

    const node = this;
    node.device = RED.nodes.getNode(config.device);

    if (node.device) {
      // Setup a subscriber to the device's aggregated topic
      node.device.subscribe(`aggregated`, node);
    }
  }

  RED.nodes.registerType('aggregated', AggregatedNode);
};
