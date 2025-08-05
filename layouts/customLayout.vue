<template>
    <div>
        <!-- 使用 custom-layout 布局，布局檔案 customLayout.vue -->
        <UiCustomHeader/>
        <div>
            <slot />
        </div>
        <UiCustomFooter/>
    </div>
</template>