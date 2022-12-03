import dynamic from 'next/dynamic'
const Text = dynamic(() => import('../../../Text'), {ssr: false,})
const Button = dynamic(() => import('../../../Button'), {ssr: false,})

export default function Footer() {
  const custombtn = (text, link, icon, classes) => <Button
    text={text}
    iconclasses={icon ? `font_l4 round_l1 rexfont_init ${icon}` : ''}
    innerclasses={`padding_l2 padding_l0 ${classes}`}
    customclasses={'round_l1 rtl'}
    textclasses={'font_l2'}
    hovercolor={'#fff'}
    bg={'#0000'}
    color={'#9ca5af'}
    height='40px'
    plane={'1'}
    link={link}
  />

  const customTitle = title => <Text
    text={title}
    textcolor={'#fff'}
    textclasses={'subcontainer wide textright rtl'}
    textalign={'righty'}
    textfontsize={'var(--l5-text-fontSize)'}
    innercustomclasses={'wide_important'}
  />
  return (
    <>
      <section className={'container topy horizontal'} style={{backgroundColor: '#0a1229'}}>
        <section className={'subcontainer vertical lefty'}>
          {customTitle('شعار ساینا گسنر')}
          <Text
            text={'توضیحات اولیه شرکت ساینا گستر. توضیحات اولیه شرکت ساینا گستر .توضیحات اولیه شرکت ساینا گستر. توضیحات اولیه شرکت ساینا گستر.'}
            textcolor={'#9ca5af'}
            textclasses={'subcontainer nomargin wide textright rtl'}
            textalign={'righty'}
            textfontsize={'var(--l3-text-fontSize)'}
            innercustomclasses={'wide_important'}
          />
          <section className={'subcontainer horizontal horizontalTabletBreak fitWidth'}>
            <section className={'subcontainer'}>{custombtn('021-86044653', 'tel:02186044653', 'address-book rx_light')}</section>
            <section className={'subcontainer'}>{custombtn('0912-5400667', 'tel:09125400667', 'address-book rx_light')}</section>
          </section>
          <section className={'subcontainer horizontal horizontalTabletBreak fitWidth'}>
          <section className={'subcontainer'}>{custombtn('info@sainax.com', 'mailto:info@sainax.com', 'address-book rx_light', 'hidetextontablet')}</section>
            <section className={'subcontainer'}>{custombtn('', 'https://www.instagram.com/saina.gostar/', 'fa-brands fa-instagram-square', 'nocolgap')}</section>
            <section className={'subcontainer'}>{custombtn('', 'https://twitter.com/SainaGostar', 'address-book rx_light', 'nocolgap')}</section>
            <section className={'subcontainer'}>{custombtn('', 'https://www.linkedin.com/company/saina-gostar/', 'address-book rx_light', 'nocolgap')}</section>
          </section>
        </section>
        <section className={'subcontainer vertical lefty norowgap'}>
          {customTitle('خدمات ساینا گستر')}
          {custombtn('مورد اول', '/blog')}
          {custombtn('مورد اول', '/blog')}
          {custombtn('مورد اول', '/blog')}
          {custombtn('مورد اول', '/blog')}
          {custombtn('مورد اول', '/blog')}
        </section>
        <section className={'subcontainer vertical lefty norowgap'}>
          {customTitle('اطلاعات دفتر ساینا')}
          {custombtn('مورد اول', '/blog', 'address-book rx_light')}
          {custombtn('مورد اول', '/blog', 'address-book rx_light')}
          {custombtn('مورد اول', '/blog', 'address-book rx_light')}
          {custombtn('مورد اول', '/blog', 'address-book rx_light')}
          {custombtn('مورد اول', '/blog', 'address-book rx_light')}
        </section>
      </section>
      <section className={'container rtl secondary_bg tertiary_color'}>
        <Text
          textcolor={'#9ca5af'}
          textclasses={'subcontainer nomargin wide textright rtl center'}
          textalign={'center'}
          customclasses={'center'}
          textfontsize={'var(--l3-text-fontSize)'}
          innercustomclasses={'wide_important'}
        ><span className={'font_l3 rtl center'}>تمام حقوق این سایت برای شرکت ساینا گستر تدبیر پارسیان محفوظ میباشد. توسعه یافته در مجموعه <a href="https://axoncodes.com" target={'_blank'}>Axoncodes</a></span></Text>
      </section>
    </>
  )
}