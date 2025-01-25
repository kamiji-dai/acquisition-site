import Script from 'next/script';

export default function Complete() {
  return (
    <div>
      <Script
        // src="https://d1mesksgssj42h.cloudfront.net/trackConversion.js?mud=75"
        src="https://hurugiyawalker.tokyo/trackConversion.js?mud=75"
        strategy="lazyOnload"
      />
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="bg-white p-8 rounded-xl shadow-md">
          <p className="text-xl text-gray-800">申し込みが完了しました。</p>
        </div>
      </div>
    </div>
  )
}

