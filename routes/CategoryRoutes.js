const express=require('express');
const router=express();
const { check} =require('express-validator');

const CategoryCtrl=require('../controllers/CategoryCtrl');


router.get("/categories",CategoryCtrl.getAllCategories);

router.post("/new-category",[
    check("imageAlt","تعداد کارکتر آلت تصویر باید بیشتر از 8 کارکتر باشد...").isLength({min:8}),
    check("title","تعداد کارکتر عنوان  باید بیشتر از 8 کارکتر باشد...").isLength({min:8}),
    check("situation","فرمت بخش انتشار اشتباه است.").isBoolean(),
],CategoryCtrl.newCategory);

router.post("/update-category/:id",[
    check("imageAlt","تعداد کارکتر آلت تصویر باید بیشتر از 8 کارکتر باشد...").isLength({min:8}),
    check("title","تعداد کارکتر عنوان  باید بیشتر از 8 کارکتر باشد...").isLength({min:8}),
    check("situation","فرمت بخش انتشار اشتباه است.").isBoolean(),
],CategoryCtrl.updateCategory);
router.post("/delete-category/:id",CategoryCtrl.deleteCategory);
router.get("/get-category/:id",CategoryCtrl.getOneCategory);
router.get("/get-active-categories",CategoryCtrl.getMainPageCategories);
router.get("/get-category/:slug",CategoryCtrl.getOnePost);



module.exports=router;