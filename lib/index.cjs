// dsh-pixel-buddy 服务端：注册宠物偏好设置命名空间（方案 A，2026-09-05 产品裁决）。
// schema 决定设置文档的校验与默认值；客户端经 settingsScope 读写同一命名空间。
module.exports.name = 'dsh-pixel-buddy';
module.exports.inject = ['settings'];
module.exports.apply = function apply(ctx) {
  const z = require('schemastery');
  const schema = z.object({
    // 宠物形象 id（枚举面由客户端选择器约束；此处宽松校验以容忍后续新增宠物）
    pet: z.string().default('duck'),
    // 是否在页面显示宠物
    visible: z.boolean().default(true),
    // 显示侧别：left / right（设置页"显示位置"）
    side: z.string().default('right'),
    // 距底边偏移（px）：拖拽结束后持久化
    bottomOffset: z.number().default(16),
  });
  ctx.settings.register('dsh-pixel-buddy', schema);
};
